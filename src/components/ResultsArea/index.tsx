import { useState } from 'react'
import { ARE } from '../ARE'
import { BalanceSheet } from '../BalanceSheet'
import { PatrimonyBalance } from '../PatrimonyBalance'
import { Rationales } from '../Rationales'
import { ResultOptions } from '../ResultsOptions'
import { MenuOptions, Release } from '../types'

import styles from './styles.module.css'

interface ResultsAreaProps {
    releasesList: Release[]
}

function ResultsArea(props: ResultsAreaProps) {

    const [optionSelected, setOptionSelected] = useState<MenuOptions>('patrimonyBalance')

    const renderResultSelected = () => {
        switch (optionSelected) {
            case 'rationales':
                return <Rationales releasesList={props.releasesList} />
            case 'balanceSheet':
                return <BalanceSheet releasesList={props.releasesList} />
            case 'patrimonyBalance':
                return <PatrimonyBalance releasesList={props.releasesList} />
            case 'are':
                return <ARE releasesList={props.releasesList} />
        }
    }

    return (
        <div className={styles.container}>
            <ResultOptions
                optionSelected={optionSelected}
                selectOption={setOptionSelected}
            />
            <br />
            {renderResultSelected()}
        </div>
    )
}

export { ResultsArea }