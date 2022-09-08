import React from 'react'

interface LineProps {
    relativeWidth: string
    color?: string
    height?: number
}

function Line({ relativeWidth, color, height }: LineProps) {
    return (
        <div style={{ 
            width: '100%' ,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20
        }}>
            <div style={{
                alignSelf: 'center',
                width: relativeWidth || '100%',
                backgroundColor: color || 'black',
                height: height || 1,
            }}>

            </div>
        </div>
    )
}

export { Line }