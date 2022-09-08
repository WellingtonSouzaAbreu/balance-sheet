import React, { useEffect, useState } from 'react'
import { Line } from '../Line'
import { AccountType, Release } from '../types'

import styles from './styles.module.css'

interface BalanceSheetProps {
    releasesList: Release[]
}

const releasesList: Release[] = [
    {
        lauchId: 1,
        value: 800,
        title: 'Traficante',
        position: 'active',
        nature: 'C',
        accountType: 'D'
    },
    {
        lauchId: 1,
        value: 800,
        title: 'Traficante',
        position: 'active',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 800,
        title: 'Fornecedor',
        position: 'active',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 200,
        title: 'Fornecedor',
        position: 'active',
        nature: 'D',
        accountType: 'P'
    },
]

function BalanceSheet(props: BalanceSheetProps) {
    // console.log(releasesList)

    const [groupedPatrimonyAccounts, setGroupedPatrimonyAccounts] = useState([])

    useEffect(() => {
        groupAccountsByType()
    }, [props.releasesList])

    const groupAccountsByType = async () => { // TODO from props
        const groupedAccounts = releasesList.reduce((acc: any, current: Release) => {
            const account = current.title

            if (current.accountType !== 'P') return acc

            if (Object.keys(acc).includes(account)) {
                acc[account] = [
                    ...acc[account],
                    {
                        value: current.value,
                        nature: current.nature,
                        accountType: current.accountType
                    }
                ]
            } else {
                acc[account] = [
                    {
                        value: current.value,
                        nature: current.nature,
                        accountType: current.accountType
                    }
                ]
            }

            return acc
        }, {})
        // console.log(groupedAccounts)
        setGroupedPatrimonyAccounts(groupedAccounts)
    }

    const renderAccountTitles = () => {
        return Object.entries(groupedPatrimonyAccounts).map((account: any, index: number) => {
            return (
                <div className={styles.inputValueRow} key={index}>
                    <span className={styles.valueLabel}>{account[0]}</span>
                </div>
            )
        })
    }

    const renderAccountDebts = () => {
        return Object.entries(groupedPatrimonyAccounts).map((account: any, index: number) => {
            return (
                <div className={styles.inputValueRow} key={index}>
                    <span className={styles.valueLabel}>
                        {
                            account[1].reduce((acc: any, current: any) => {
                                if (current.nature == 'D') {
                                    return acc += current.value
                                }
                                return acc
                            }, 0)
                        }
                    </span>
                </div>
            )
        })
    }

    const renderAccountCredits = () => {
        return Object.entries(groupedPatrimonyAccounts).map((account: any, index: number) => {
            return (
                <div className={styles.inputValueRow} key={index}>
                    <span className={styles.valueLabel}>
                        {
                            account[1].reduce((acc: any, current: any) => {
                                if (current.nature == 'C') {
                                    return acc += current.value
                                }
                                return acc
                            }, 0)
                        }
                    </span>
                </div>
            )
        })
    }

    const renderSumOfValuesByNature = (nature: string) => {
        return <span className={styles.result}>
            {releasesList.reduce((acc: any, current: Release) => {
                if (current.nature == nature && current.accountType == 'P') {
                    return acc + current.value
                }

                return acc
            }, 0)}
        </span>
    }

    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.titleArea}>
                    <span className={styles.headerText}>Contas</span>
                    <span className={styles.headerText}>Devedores</span>
                    <span className={styles.headerText}>Credores</span>
                </div>
                <div className={styles.horizontalLine}></div>
            </div>
            <div className={styles.body}>
                <div className={styles.leftArea} >
                    {renderAccountTitles()}
                    <div className={styles.resultArea}>
                        <Line relativeWidth='80%' color={'lightgray'} />
                        <span className={styles.result}>TOTAL</span>
                    </div>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.centerArea}>
                    {renderAccountDebts()}
                    <div className={styles.resultArea}>
                        <Line relativeWidth='80%' color={'lightgray'} />
                        {renderSumOfValuesByNature('D')}
                    </div>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.rightArea}>
                    {renderAccountCredits()}
                    <div className={styles.resultArea}>
                        <Line relativeWidth='80%' color={'lightgray'} />
                        {renderSumOfValuesByNature('C')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { BalanceSheet }