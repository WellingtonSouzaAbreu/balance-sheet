import React from 'react'
import { Line } from '../Line'
import { AccountInput } from '../types'

import styles from './styles.module.css'

interface RationalePProps {
    title: string
    values: AccountInput[]
}

function Rationale(props: RationalePProps) {

    const renderDebtValues = () => {
        return props.values.map((input: AccountInput, index: number) => {
            if (input.nature == 'D') {
                return (
                    <div className={styles.inputValueRow}>
                        <span className={styles.lauchIdLabel}>{input.lauchId}</span>
                        <span className={styles.valueLabel}>{input.value}</span>
                    </div>
                )
            }
        })
    }

    const renderCreditValues = () => {
        return props.values.map((input: AccountInput, index: number) => {
            if (input.nature == 'C') {
                return (
                    <div className={styles.inputValueRow}>
                        <span className={styles.valueLabel}>{input.value}</span>
                        <span className={styles.lauchIdLabel}>{input.lauchId}</span>
                    </div>
                )
            }
        })
    }

    const getRationaleResult = (nature: string) => {
        const debtAmount = sumAllAccountsValueByNature('D')
        const creditAmount = sumAllAccountsValueByNature('C')

        if (nature == 'C' && creditAmount >= debtAmount) {
            return <span className={styles.result}>{creditAmount - debtAmount}</span>
        }
        if (nature == 'D' && debtAmount >= creditAmount) {
            return <span className={styles.result}>{debtAmount - creditAmount}</span>
        }

        return <span className={styles.result}>0</span>
    }

    const sumAllAccountsValueByNature = (nature: string) => {
        return props.values.reduce((acc: any, current: AccountInput) => {
            if (current.nature == nature) {
                acc += current.value
            }
            return acc
        }, 0)
    }

    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.titleArea}>
                    <span className={styles.headerText}>D</span>
                    <span className={styles.headerText}>{props.title}</span>
                    <span className={styles.headerText}>C</span>
                </div>
                <div className={styles.horizontalLine}></div>
            </div>
            <div className={styles.body}>
                <div className={styles.leftArea} >
                    {renderDebtValues()}
                    <div className={styles.resultArea}>
                        <Line relativeWidth='80%' color={'lightgray'} />
                        {getRationaleResult('D')}
                    </div>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.rightArea}>
                    {renderCreditValues()}
                        <div className={styles.resultArea}>
                            <Line relativeWidth='80%' color={'lightgray'} />
                            {getRationaleResult('C')}
                        </div>
                </div>
            </div>
        </div>
    )
}

export { Rationale }