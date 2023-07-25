import { ISlideProps } from '@components/WalkThrough/types/walkthrough'

/* eslint-disable @typescript-eslint/no-var-requires */
const img1 = require('@assets/img/ola_professor.png')
const img2 = require('@assets/img/seletor_code_name.png')
const img3 = require('@assets/img/icones_gabarito.png')
const img4 = require('@assets/img/questoes_abertas.png')
const img5 = require('@assets/img/leitura_gabarito.png')
const img6 = require('@assets/img/botao_ajuda.png')



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
    // {
    //     id: '3',
    //     image: img3,
    //     title: 'Best Digital Solution',
    //     subtitle: 'lorem lorem lorem'
    // },
    // {
    //     id: '4',
    //     image: img4,
    //     title: 'Best Digital Solution',
    //     subtitle: 'lorem lorem lorem'
    // },
    // {
    //     id: '5',
    //     image: img5,
    //     title: 'Best Digital Solution',
    //     subtitle: 'lorem lorem lorem'
    // },
    // {
    //     id: '6',
    //     image: img6,
    //     title: 'Best Digital Solution',
    //     subtitle: 'lorem lorem lorem'
    // },
]