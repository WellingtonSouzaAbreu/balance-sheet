import React, { useEffect, useState } from 'react'
import { Rationale } from '../Rationale'
import { Release } from '../types'

import styles from './styles.module.css'

interface RationalesProps {
    releasesList: Release[]
}

const releasesList: Release[] = [
    {
        lauchId: 1,
        value: 800,
        title: 'Traficante',
        position: 'active',
        nature: 'C',
        accountType: 'P'
    }
]

function Rationales(props: RationalesProps) {

    const [groupedAccounts, setGroupedAccounts] = useState([])

    useEffect(() => {
        groupAccountsByType()
    },[props.releasesList])

    const groupAccountsByType = async () => { // TODO from props
        const groupedAccounts = releasesList.reduce((acc: any, current: any) => {
            const account = current.title

            if (Object.keys(acc).includes(account)) {
                acc[account] = [
                    ...acc[account],
                    {
                        value: current.value,
                        nature: current.nature,
                        lauchId: current.lauchId
                    }
                ]
            } else {
                acc[account] = [
                    {
                        value: current.value,
                        nature: current.nature,
                        lauchId: current.lauchId
                    }
                ]
            }

            return acc
        }, {})
        // console.log(groupedAccounts)
        setGroupedAccounts(groupedAccounts)
    }

    const renderRationales = () => {
        return Object.entries(groupedAccounts).map((account, index) => {
            return (
                <Rationale
                    key={index}
                    title={account[0]}
                    values={account[1]}
                />
            )
        })
    }

    return (
        <div className={styles.container}>
            {renderRationales()}
        </div >
    )
}

export { Rationales }