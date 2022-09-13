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

    const [lauchId, setLauchId] = useState(0)
    const [title, setTitle] = useState('')
    const [nature, setNature] = useState('')
    const [position, setPosition] = useState('')
    const [value, setTValue] = useState<number | null>(null)
    const [accountType, setAccountType] = useState<AccountType>('P')

    const lauchButtonRef = useRef<any>(null)

    const defaultAccountTitles = ['Capital Social', 'Fornecedor', 'Caixa', 'Equipamentos', 'Móveis', 'Imóveis', 'Empréstimo']

    const saveNewRelease = () => {
        if (!fildsAreValid()) {
            window.alert('Por favor, preencha corretamente o lançamento!')
            return
        }

        props.performLauch({
            lauchId,
            title,
            nature,
            position,
            value: parseFloat(value as any),
            accountType
        })

        cleanFields()
    }

    const editRelease = (release: Release) => {
        setLauchId(release.lauchId)
        setTitle(release.title)
        setNature(release.nature)
        setPosition(release.position)
        setTValue(release.value)
        setAccountType(release.accountType)
    }

    const deleteRelease = (lauchId: number) => {
        props.deleteRelease(lauchId)
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
        setLauchId(0)
        setTitle('')
        setNature('')
        setPosition('')
        setTValue(null)
        setAccountType('P')
    }

    const getDefaultAccountTitle = () => {

        return defaultAccountTitles.sort().map((accountTitle: string, index: number) => {
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
                            disabled={true}
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
                            disabled={true}
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
                deleteRelease={deleteRelease}
                editRelease={editRelease}
            />
        </div>
    );
}