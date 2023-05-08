import { ISlideProps } from '@components/WalkThrough/types/walkthrough'

/* eslint-disable @typescript-eslint/no-var-requires */
const img1 = require('@assets/img/imagem1.png')
const img2 = require('@assets/img/imagem2.png')
const img3 = require('@assets/img/imagem3.png')

export const slides: ISlideProps[] = [
    {
        id: '1',
        image: img1,
        title: 'Teste Imagem 1',
        subtitle: 'lorem lorem lorem'
    },
    {
        id: '2',
        image: img2,
        title: 'Best Digital Solution',
        subtitle: 'lorem lorem lorem'
    },
    {
        id: '3',
        image: img3,
        title: 'Best Digital Solution',
        subtitle: 'lorem lorem lorem'
    },
    {
        id: '4',
        image: img2,
        title: 'Best Digital Solution',
        subtitle: 'lorem lorem lorem'
    },
]