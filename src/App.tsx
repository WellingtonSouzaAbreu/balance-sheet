import { LauchingSideBar } from './components/LauchingSideBar'
import { ResultsArea } from './components/ResultsArea'

import styles from './App.module.css'
import { useState } from 'react'
import { Release } from './components/types'

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
                    releasesList={releasesList}
                    performLauch={performLauch}
                    deleteRelease={deleteRelease}
                />
            </div>
            <div className={styles.resultsArea}>
                <div className={styles.headerArea}>
                    <span className={styles.headerTitle}>BALANÇO PATRIMONIAL</span>
                </div>
                <ResultsArea releasesList={releasesList} />
            </div>
        </div>
    )
}

export { App }
