import { HDLeftComponentProps } from '@components/HeaderDefault/types/leftComponent'
import { HDRightComponentProps } from '@components/HeaderDefault/types/rightComponent'

export interface HeaderDefaultProps {
  title?: string
  type?: 'default' | 'drawer' | 'moreVert'
  centerComponentImageUrl?: string
  wasLoggedOut?: boolean /** se o usuário for desconectado  e este atributo for passado o header não aparece. */
  leftComponent?: HDLeftComponentProps
  rightComponent?: HDRightComponentProps
}
