import Item from './Item'
import styled from 'styled-components';


const ItemList = ({items}) => {
  const DivContenedor = styled.div `
    padding: 1.5rem;      
    display: flex;
  `;
  const DivRow = styled.div `
  flex-direction: wrap;
  width: 15rem;
  margin-top: 1rem;
  margin-left: 1rem;
  `;
  return (
    <DivContenedor>
      {items.map(item =>(
      <DivRow className='col-md-4' key={item.index}>
        <Item item={item}/>
        </DivRow>
      ))}
      </DivContenedor>       
  )
}

export default ItemList;