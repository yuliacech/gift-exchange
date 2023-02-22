import { EuiButton, EuiCard } from '@elastic/eui';
import type { Guest } from '../types';
import {css} from '@emotion/react'
export const GuestCard = ({ guest }: { guest: Guest; }) => {
    const { name, wishes } = guest;
    return (<div>
        <p>{name} </p>
{wishes && wishes.map(wish => (
    <EuiCard
    css={css`max-width: 200px`}
    textAlign="left"
    image={
      wish.imageUrl
    }
    title={wish.name}
    description={wish.description}
    footer={
      
          <EuiButton fill>View</EuiButton>
        
    }
  />
))}
    </div>);
}