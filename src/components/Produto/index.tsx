import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { add, addFavorite, removeFavorite } from '../../store/reducers/cart'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  const favoritar = () => {
    dispatch(addFavorite(produto))
  }

  const desfavoritar = (id: number) => {
    dispatch(removeFavorite(id))
  }

  const aoComprar = () => {
    dispatch(add(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      {estaNosFavoritos ? (
        <S.BtnComprar onClick={() => desfavoritar(produto.id)} type="button">
          - Remover dos favoritos
        </S.BtnComprar>
      ) : (
        <S.BtnComprar onClick={favoritar} type="button">
          + Adicionar aos favoritos
        </S.BtnComprar>
      )}
      <S.BtnComprar onClick={aoComprar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
