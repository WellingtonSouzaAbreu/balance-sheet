import React from 'react'
import { Release } from '../types'

import styles from './styles.module.css'

interface ReleasesProps {
    releasesList: Release[],
    deleteRelease: (index: number) => void
}

function Releases(props: ReleasesProps) {
    const renderReleases = () => {
        return props.releasesList.map((release: Release, index) => {
            return (
                <div
                    className={styles.releaseArea}
                    key={index}
                    onDoubleClick={() => props.deleteRelease(release.lauchId)}
                >
                    <span className={styles.release}>
                        {release.lauchId} | {release.nature} - {release.title}
                    </span>
                    <span className={styles.release}>
                        {release.value}
                    </span>
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            <h4>Diário</h4>
            <div className={styles.releasesList}>
                {renderReleases()}
            </div>
        </div>
    )
}

export { Releases }