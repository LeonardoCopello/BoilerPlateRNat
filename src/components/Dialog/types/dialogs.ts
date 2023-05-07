import { DialogButtonLess } from './../DialogButtonLess/index'
type ModalType = 'dialog' | 'bottomSheet'
export interface IDialogProps {
    isVisible: boolean
    title: string | undefined
    bodyText: string | undefined
    labelBtnConfirm: string | undefined
    labelBtnCancel: string | undefined
    modalType: ModalType
    onPressConfirm: () => void | undefined
    onPressCancel: () => void | undefined
    toggleVisibility: () => void

}


export type DialogConfirmProps = Pick<IDialogProps, 'bodyText' | 'isVisible' | 'title' | 'toggleVisibility' | 'onPressConfirm' | 'labelBtnConfirm' | 'modalType'>

export type DialogErrorProps = Pick<IDialogProps, 'bodyText' | 'isVisible' | 'title' | 'toggleVisibility' | 'onPressConfirm' | 'labelBtnConfirm'>

export type DialogButtonLessProps = Pick<IDialogProps, 'bodyText' | 'title' | 'bodyText' | 'isVisible' | 'modalType' | 'toggleVisibility'>

export type DialogBothBtnsProps = Pick<IDialogProps, 'bodyText' | 'isVisible' | 'title' | 'toggleVisibility' | 'onPressConfirm' | 'onPressCancel' | 'labelBtnConfirm' | 'labelBtnCancel' | 'modalType'>

export interface IBottomSheetDialogProps {
    isVisible: boolean
    btnColor: string
    btnCancelColor: string
    dialogTitle: string
    dialogBodyText: string
    dialogLabelBtn: string
    dialogLabelBtnCancel: string
    toggleVisibility: () => void
    handleConfirm: () => void
    handleCancel: () => void
}

export type BottomSheetOneBtnProps = Pick<IBottomSheetDialogProps, 'isVisible' | 'btnColor' | 'dialogTitle' | 'dialogBodyText' | 'dialogLabelBtn' | 'toggleVisibility' | 'handleConfirm'>

export type BottomSheetBothBtnsProps = Pick<IBottomSheetDialogProps, 'isVisible' | 'btnColor' | 'btnCancelColor'| 'dialogTitle' | 'dialogBodyText' | 'dialogLabelBtn' | 'dialogLabelBtnCancel' | 'toggleVisibility' | 'handleConfirm' | 'handleCancel'>


export type BottomSheetNoBtnProps = Pick<IBottomSheetDialogProps, 'isVisible' | 'dialogTitle' | 'dialogBodyText' | 'toggleVisibility'>
