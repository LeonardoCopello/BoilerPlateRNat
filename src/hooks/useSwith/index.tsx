
import React, { useEffect, useState } from 'react'

interface IProps {
    onToggle: () => void
}
export const useSwitch = ({ onToggle }: IProps) => {

    const [triggerUpdate, setTriggerUpdate] = useState(0)
    const [checked, setChecked] = useState(false)

    const toggleChecked = () => {
        setChecked(!checked)
        setTriggerUpdate(prev => prev + 1)
    }

    useEffect(() => {
        onToggle()
    },[checked])
    // const toggleSwitch = () => {
    //     setChecked(prev => !prev)
    //     setTriggerUpdate(prev => prev + 1)
    // }

    // useEffect(() => {
    //     if (triggerUpdate > 0) {
    //         // vai impedir a execução na primeira renderização
    //         if (onToggle) {
    //             onToggle()
    //         }
    //     }
    // }, [triggerUpdate])

    // useEffect(() => {
    //     toggleSwitch()
    // },[checked])


    return {
        checked: checked,
        triggerUpdate: triggerUpdate,
        toggleChecked: toggleChecked
    }
}