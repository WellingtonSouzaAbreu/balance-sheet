import React, { useEffect, useState } from 'react'
import { Line } from '../Line'
import { Release } from '../types'

import styles from './styles.module.css'

interface AREProps {
    releasesList: Release[]
}

function ARE(props: AREProps) {

    const [groupedAccounts, setGroupedAccounts] = useState([])

    useEffect(() => {
        groupAccountsByType()
    }, [props.releasesList])

    const groupAccountsByType = async () => {//TODO props.releasesList
        const groupedAccounts = props.releasesList.reduce((acc: any, current: any) => {
            const account = current.title

            if (current.accountType == 'P') return acc

            if (Object.keys(acc).includes(account)) {
                acc[account] = [
                    ...acc[account],
                    {
                        value: current.value,
                        nature: current.nature,
                        lauchId: current.lauchId,
                        accountType: current.accountType
                    }
                ]
            } else {
                acc[account] = [
                    {
                        value: current.value,
                        nature: current.nature,
                        lauchId: current.lauchId,
                        accountType: current.accountType
                    }
                ]
            }

            return acc
        }, {})
        console.log(groupedAccounts)
        setGroupedAccounts(groupedAccounts)
    }

    const renderExpenseAccounts = () => {
        return Object.entries(groupedAccounts).map((account: any, index: number) => {
            console.log(account)
            return (
                <div className={styles.inputValueRow} key={index}>
                    <span className={styles.lauchIdLabel}>{account[0]}</span>
                    <span className={styles.valueLabel}>{getSumOfExpenses(account[1])}</span>
                </div>
            )
        })
    }

    const getSumOfExpenses = (lauchs: any) => {
        const totalExpreses = lauchs.reduce((acc: any, current: any) => {
            if (current.accountType == 'D') {
                acc += current.value
            }
            return acc
        }, 0)

        return totalExpreses
    }

    const renderRevenueAccounts = () => {
        return Object.entries(groupedAccounts).map((account: any, index: number) => {
            console.log(account)
            return (
                <div className={styles.inputValueRow} key={index}>
                    <span className={styles.lauchIdLabel}>{account[0]}</span>
                    <span className={styles.valueLabel}>{getSumOfRevenue(account[1])}</span>
                </div>
            )
        })
    }

    const getSumOfRevenue = (lauchs: any) => {
        const totalExpreses = lauchs.reduce((acc: any, current: any) => {
            if (current.accountType == 'R') {
                acc += current.value
            }
            return acc
        }, 0)

        return totalExpreses
    }

    const getDifferenceBetweenCreditAndDebitByPosition = (lauchs: any, position: string) => {
        const totalDebt = lauchs.reduce((acc: any, current: any) => {
            if (current.nature == 'D') {
                acc += current.value
            }
            return acc
        }, 0)

        const totalCredit = lauchs.reduce((acc: any, current: any) => {
            if (current.nature == 'C') {
                acc += current.value
            }
            return acc
        }, 0)

        if (position == 'active') {
            return totalDebt - totalCredit
        }

        if (position == 'passive' || position == 'cs') {
            return totalCredit - totalDebt
        }
    }

    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.titleArea}>
                    <span className={styles.headerText}>Despesas</span>
                    <span className={styles.headerText}>A.R.E.</span>
                    <span className={styles.headerText}>Receitas</span>
                </div>
                <div className={styles.horizontalLine}></div>
            </div>
            <div className={styles.body}>
                <div className={styles.leftArea} >
                    In development...
                  {/*   {renderExpenseAccounts()} */}
                    <div className={styles.resultArea}>
                        {/* <Line relativeWidth='80%' color={'lightgray'} /> */}
                        {/*   {getRationaleResult('D')} */}
                    </div>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.rightArea}>
                   {/*  {renderRevenueAccounts()} */}
                    <div className={styles.resultArea}>
                        {/* <Line relativeWidth='80%' color={'lightgray'} /> */}
                        {/* {getRationaleResult('C')} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ARE }