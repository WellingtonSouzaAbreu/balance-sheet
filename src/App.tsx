import { LauchingSideBar } from './components/LauchingSideBar'
import { ResultsArea } from './components/ResultsArea'

import styles from './App.module.css'
import { useEffect, useState } from 'react'
import { Release } from './components/types'

const releasesListDefault: Release[] = [
    {
        lauchId: 1,
        value: 1000,
        title: 'Traficante',
        position: 'active',
        nature: 'D',
        accountType: 'R'
    }
]

function App() {
    const [releasesList, setReleaseList] = useState([])
    const [alerted, setAlerted] = useState(false)

    const performLauch = (newRelease: Release) => {
        let currentReleaseList = [...releasesList]

        if (newRelease.lauchId != 0) {
            currentReleaseList = deleteLauchById(newRelease.lauchId)
        }

        currentReleaseList.push({
            ...newRelease,
            lauchId: newRelease.lauchId != 0 ? newRelease.lauchId : releasesList.length + 1
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
        const currentReleaseList =deleteLauchById(lauchId)

        const sortedReleaseList = sortList(currentReleaseList)
        setReleaseList(sortedReleaseList)
    }

    const deleteLauchById = (lauchId: number) => {
        return releasesList.filter((release: Release) => release.lauchId != lauchId)
    }

    return (
        <div className={styles.container} >
            <div className={styles.sidebar}>
                <LauchingSideBar
                    releasesList={releasesList} //TODO Remove default
                    performLauch={performLauch}
                    deleteRelease={deleteRelease}
                />
            </div>
            <div className={styles.resultsArea}>
                <div className={styles.headerArea}>
                    <span className={styles.headerTitle}>BALANÇO PATRIMONIAL</span>
                </div>
                <ResultsArea releasesList={releasesList} /> {/* //TODO Remove default */}
            </div>
        </div>
    )
}

export { App }
