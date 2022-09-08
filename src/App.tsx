import { LauchingSideBar } from './components/LauchingSideBar'
import { ResultsArea } from './components/ResultsArea'

import styles from './App.module.css'
import { useState } from 'react'
import { Release } from './components/types'

const releasesListDefault: Release[] = [
    {
        lauchId: 1,
        value: 500,
        title: 'Traficante',
        position: 'active',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 500,
        title: 'Fornecedor',
        position: 'active',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 1500,
        title: 'Fornecedor',
        position: 'active',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1000,
        title: 'Concecionária',
        position: 'passive',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 800,
        title: 'Concecionária',
        position: 'passive',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 800,
        title: 'Empréstimo',
        position: 'passive',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 2,
        value: 1500,
        title: 'Sócios',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 750,
        title: 'Sócios',
        position: 'cs',
        nature: 'D',
        accountType: 'P'
    },
    {
        lauchId: 1,
        value: 800,
        title: 'Doações',
        position: 'cs',
        nature: 'C',
        accountType: 'P'
    },
]


function App() {
    const [releasesList, setReleaseList] = useState([])

    const performLauch = (newRelease: Release) => {
        const currentReleaseList = [...releasesList]
        currentReleaseList.push({
            ...newRelease,
            lauchId: releasesList.length + 1
        } as never)

        const sortedReleaseList = sortList(currentReleaseList)
        setReleaseList(sortedReleaseList)
    }

    const sortList = (releasesList: any) => {
        return releasesList.map((release: Release, index: number) => {
            return {
                ...release,
                lauchId: index + 1
            }
        })
    }

    const deleteRelease = (lauchId: number) => {
        const resp = window.confirm('Tem certeza que deseja deletar lançamento?')
        if (!resp) return
        const currentReleaseList = releasesList.filter((release: Release) => release.lauchId != lauchId)
        console.log(currentReleaseList)
        const sortedReleaseList = sortList(currentReleaseList)
        setReleaseList(sortedReleaseList)
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <LauchingSideBar
                    releasesList={releasesListDefault} //TODO Remove default
                    performLauch={performLauch}
                    deleteRelease={deleteRelease}
                />
            </div>
            <div className={styles.resultsArea}>
                <div className={styles.headerArea}>
                    <span className={styles.headerTitle}>BALANÇO PATRIMONIAL</span>
                </div>
                <ResultsArea releasesList={releasesListDefault} />
            </div>
        </div>
    )
}

export { App }
