export interface IDialogProps {
    isVisible: boolean
    title: string | undefined
    bodyText: string | undefined
    labelBtnConfirm: string | undefined
    labelBtnCancel: string | undefined
    onPressConfirm: () => void | undefined
    onPressCancel: () => void | undefined
    toggleVisibility: () => void
}

export type DialogConfirmProps = Pick<IDialogProps, 'bodyText' | 'isVisible' | 'title' | 'toggleVisibility' | 'onPressConfirm' | 'labelBtnConfirm'>

export type DialogErrorProps = Pick<IDialogProps, 'bodyText' | 'isVisible' | 'title' | 'toggleVisibility' | 'onPressConfirm' | 'labelBtnConfirm'>

export type DialogBothBtnsProps = Pick<IDialogProps, 'bodyText' | 'isVisible' | 'title' | 'toggleVisibility' | 'onPressConfirm' | 'onPressCancel' | 'labelBtnConfirm' | 'labelBtnCancel'>


