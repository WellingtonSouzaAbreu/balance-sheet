import React, { lazy, useEffect, useState } from 'react'
import { Line } from '../Line'
import { Release } from '../types'

import styles from './styles.module.css'

interface PatrimonyBalanceProps {
    releasesList: Release[]
}

function PatrimonyBalance(props: PatrimonyBalanceProps) {

    const [groupedPatrimonyAccounts, setGroupedPatrimonyAccounts] = useState([])

    useEffect(() => {
        groupAccountsByType()
    }, [props.releasesList])

    const groupAccountsByType = async () => { 
        const groupedAccounts = props.releasesList.reduce((acc: any, current: Release) => {
            const account = current.title

            if (current.accountType !== 'P') return acc

            if (Object.keys(acc).includes(account)) {
                acc[account] = [
                    ...acc[account],
                    {
                        value: current.value,
                        nature: current.nature,
                        accountType: current.accountType,
                        position: current.position
                    }
                ]
            } else {
                acc[account] = [
                    {
                        value: current.value,
                        nature: current.nature,
                        accountType: current.accountType,
                        position: current.position
                    }
                ]
            }

            return acc
        }, {})

        setGroupedPatrimonyAccounts(groupedAccounts)
    }

    const renderActiveAccounts = () => {
        return Object.entries(groupedPatrimonyAccounts).map((account: any, index: number) => {
            if (account[1][0].position == 'active') {
                return (
                    <div className={styles.inputValueRow} key={index}>
                        <span className={styles.lauchIdLabel}>{account[0]}</span>
                        <span className={styles.valueLabel}>{getDifferenceBetweenCreditAndDebitByPosition(account[1], 'active')}</span>
                    </div>
                )
            }
        })
    }

    const renderPassiveAccounts = () => {
        return Object.entries(groupedPatrimonyAccounts).map((account: any, index: number) => {
            if (account[1][0].position == 'passive') {
                return (
                    <div className={styles.inputValueRow} key={index}>
                        <span className={styles.lauchIdLabel}>{account[0]}</span>
                        <span className={styles.valueLabel}>{getDifferenceBetweenCreditAndDebitByPosition(account[1], 'passive')}</span>
                    </div>
                )
            }
        })
    }

    const renderCSAccounts = () => {
        return Object.entries(groupedPatrimonyAccounts).map((account: any, index: number) => {
            if (account[1][0].position == 'cs') {
                return (
                    <div className={styles.inputValueRow} key={index}>
                        <span className={styles.lauchIdLabel}>{account[0]}</span>
                        <span className={styles.valueLabel}>{getDifferenceBetweenCreditAndDebitByPosition(account[1], 'cs')}</span>
                    </div>
                )
            }
        })
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
            console.log('acc')
            console.log(acc)
            return acc
        }, 0)

        if (position == 'active') {
            return totalDebt - totalCredit
        }

        if (position == 'passive' || position == 'cs') {
            return totalCredit - totalDebt
        }
    }

    const renderSumOfValuesByPosition = (position: string) => {
        return <span className={styles.result}>
            {
                Object.entries(groupedPatrimonyAccounts).reduce((acc: any, current: any) => {
                    if (current[1][0].position == position) {
                        const accountResult = getDifferenceBetweenCreditAndDebitByPosition(current[1], position)
                        acc += accountResult
                    }
                    return acc
                }, 0)
            }
        </span>
    }

    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.titleArea}>
                    <span className={styles.headerText}>Ativo</span>
                    <span className={styles.headerText}>Balanço Patrimonial</span>
                    <span className={styles.headerText}>Passivo</span>
                </div>
                <div className={styles.horizontalLine}></div>
            </div>
            <div className={styles.body}>
                <div className={styles.leftArea} >
                    {renderActiveAccounts()}
                    <div className={styles.resultArea}>
                        <Line relativeWidth='80%' color={'lightgray'} />
                        {renderSumOfValuesByPosition('active')}
                    </div>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.rightArea}>
                    <div className={styles.rightTopArea}>
                        {renderPassiveAccounts()}
                        <div className={styles.resultArea}>
                            <Line relativeWidth='80%' color={'lightgray'} />
                            {renderSumOfValuesByPosition('passive')}
                        </div>
                    </div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.rightBottomArea}>
                        {renderCSAccounts()}
                        <div className={styles.resultArea}>
                            <Line relativeWidth='80%' color={'lightgray'} />
                            {renderSumOfValuesByPosition('cs')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PatrimonyBalance }