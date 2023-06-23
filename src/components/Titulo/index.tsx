import styled from 'styled-components'
import avaliacao from './assets/avaliacao.png'
import grafico from './assets/avaliacao.png'
import consulta from './assets/consulta.png'

interface Props{
    imagem?: string,
    children?: React.ReactNode
}

interface Imagens{
    avaliacao: string,
    grafico: string,
    consulta: string
}

const SpanEstilizado = styled.span<Props>`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 25px;
height: 25px;
background-image: ${props => props.imagem ? `url(${props.imagem})` : `none`}
`

const TituloEstilizado = styled.h2`
color: var(--azul-claro);
`

const ContainerEstilizado = styled.div`
display: flex;
align-items: center;
`

const Titulo = ({imagem, children}: Props) => {

    const listaImagens: Imagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }
    return( 
        <ContainerEstilizado>
            {imagem && <SpanEstilizado imagem={listaImagens[imagem as keyof Imagens]} />}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default Titulo