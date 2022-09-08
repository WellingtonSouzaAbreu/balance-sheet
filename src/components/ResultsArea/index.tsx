import { useState } from 'react'
import { BalanceSheet } from '../BalanceSheet'
import { Rationales } from '../Rationales'
import { ResultOptions } from '../ResultsOptions'
import { MenuOptions, Release } from '../types'

import styles from './styles.module.css'

interface ResultsAreaProps {
    releasesList: Release[]
}

function ResultsArea(props: ResultsAreaProps) {

    const [optionSelected, setOptionSelected] = useState<MenuOptions>('balanceSheet')

    const renderResultSelected = () => {
        switch (optionSelected) {
            case 'rationales':
                return <Rationales releasesList={props.releasesList} />
            case 'balanceSheet':
                return <BalanceSheet releasesList={props.releasesList} />
            case 'are': return <div>ARE</div>
            case 'swing': return <div>Balanço</div>
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