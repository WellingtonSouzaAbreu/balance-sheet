import React from 'react'
import { Line } from '../Line'
import { MenuOptions } from '../types'

import styles from './styles.module.css'

interface ResultOptionsProps {
    optionSelected: MenuOptions
    selectOption: (option: MenuOptions) => void
}

function ResultOptions(props: ResultOptionsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.optionsArea}>
                <button
                    className={
                        props.optionSelected == 'rationales'
                            ? styles.optionItemSelected
                            : styles.optionItem
                    }
                    onClick={() => props.selectOption('rationales')}
                >
                    <span className={styles.optionItemLabel}>Razonetes</span>
                </button>
                <button
                    className={
                        props.optionSelected == 'balanceSheet'
                            ? styles.optionItemSelected
                            : styles.optionItem
                    }
                    onClick={() => props.selectOption('balanceSheet')}
                >
                    <span className={styles.optionItemLabel}>Balancete</span>
                </button>
                <button
                    className={
                        props.optionSelected == 'patrimonyBalance'
                            ? styles.optionItemSelected
                            : styles.optionItem
                    }
                    onClick={() => props.selectOption('patrimonyBalance')}
                >
                    <span className={styles.optionItemLabel}>Balanço</span>
                </button>
                <button
                    className={
                        props.optionSelected == 'are'
                            ? styles.optionItemSelected
                            : styles.optionItem
                    }
                    onClick={() => props.selectOption('are')}
                >
                    <span className={styles.optionItemLabel}>A.R.E.</span>
                </button>
            </div>
            <Line relativeWidth='70%' color={'#2A755A'} />
        </div>

    )
}

export { ResultOptions }