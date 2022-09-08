import React, { useRef, useState } from 'react';
import { Line } from '../Line';
import { Releases } from '../Releases';
import { AccountType, Release } from '../types';

import styles from './styles.module.css'

interface LauchingSideBar {
    releasesList: Release[],
    performLauch: (release: Release) => void
    deleteRelease: (index: number) => void
}

export function LauchingSideBar(props: LauchingSideBar) {

    const [title, setTitle] = useState('')
    const [nature, setNature] = useState('')
    const [position, setPosition] = useState('')
    const [value, setTValue] = useState<number | null>(null)
    const [accountType, setAccountType] = useState<AccountType>('P')

    const lauchButtonRef = useRef<any>(null)

    const defaultAccountTitles = ['Fornecedor', 'Caixa', 'Equipamentos', 'Móveis', 'Imóveis']

    const showFormData = () => {
        // console.log(title)
        /* console.log(nature)
        console.log(position)
        console.log(value) */
    }

    showFormData()

    const saveNewRelease = () => {
        if (!fildsAreValid()) {
            window.alert('Por favor, preencha corretamente o lançamento!')
            return
        }

        props.performLauch({
            lauchId: 0,
            title,
            nature,
            position,
            value: parseFloat(value as any),
            accountType 
        })

        cleanFields()
    }

    const fildsAreValid = () => {
        if (title.length < 1) return false
        if (value == null) return false
        if (nature == '') return false
        if (position == '') return false

        return true
    }

    const cleanFields = () => {
        setTitle('')
        setNature('')
        setPosition('')
        setTValue(null)
        setAccountType('P')
    }

    const getDefaultAccountTitle = () => {
        return defaultAccountTitles.map((accountTitle: string, index: number) => {
            return (
                <option value={accountTitle} key={index} />
            )
        })
    }

    const getTitlesAlreadyRegistred = () => {
        let releaseTitlesRegistred: any[] = []

        return props.releasesList.map((release: Release, index) => {
            if (releaseTitlesRegistred.includes(release.title) || defaultAccountTitles.includes(release.title)) {
                return
            } else {
                releaseTitlesRegistred.push(release.title)
                return (
                    <option value={release.title} key={index} />
                )
            }
        })
    }

    const pressLauchButton = (e: React.KeyboardEvent) => {
        if (e.key == 'Enter') {
            lauchButtonRef.current.click()
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <input
                    placeholder='Tipo de conta...'
                    className={styles.textInput}
                    type={'text'}
                    list="browsers"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <datalist id="browsers">
                    {getDefaultAccountTitle()}
                    {getTitlesAlreadyRegistred()}
                </datalist>

                <div className={styles.radioButtonsArea}>
                    <label className={styles.ratioLabel}>
                        <input
                            name={'patrimony'}
                            type={'radio'}
                            value={'P'}
                            className={styles.ratioButton}
                            checked={accountType == 'P'}
                            onChange={() => setAccountType('P')}
                        />
                        P
                    </label>
                    <label className={styles.ratioLabel}>
                        <input
                            name={'expense'}
                            type={'radio'}
                            value={'D'}
                            className={styles.ratioButton}
                            checked={accountType == 'D'}
                            onChange={() => setAccountType('D')}
                        />
                        D
                    </label>
                    <label className={styles.ratioLabel}>
                        <input
                            name={'revenue'}
                            type={'radio'}
                            value={'R'}
                            className={styles.ratioButton}
                            checked={accountType == 'R'}
                            onChange={() => setAccountType('R')}
                        />
                        R
                    </label>
                </div>

                <select
                    className={styles.selectInput}
                    value={nature}
                    onChange={(e) => setNature(e.target.value)}
                >
                    <option value={''}></option>
                    <option value={'D'}>Débito</option>
                    <option value={'C'}>Crédito</option>
                </select>

                <select
                    className={styles.selectInput}
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                >
                    <option value={''}></option>
                    <option value={'active'}>Ativo</option>
                    <option value={'passive'}>Passivo</option>
                    <option value={'cs'}>Capital Social</option>
                </select>

                <input
                    placeholder='Valor...'
                    className={styles.textInput}
                    type={'text'}
                    value={value ? value : ''}
                    onKeyPress={(e) => pressLauchButton(e)}
                    onChange={(e) => setTValue(e.target.value as any)}
                />

                <button
                    className={styles.lauchButton}
                    ref={lauchButtonRef}
                    onClick={saveNewRelease}
                >
                    Lançar
                </button>
            </div>
            <Line relativeWidth={'70%'} color={'#FFFFFF'} />
            <Releases
                releasesList={props.releasesList}
                deleteRelease={props.deleteRelease}
            />
        </div>
    );
}