import { styled } from '@mui/system'
import { red } from '@mui/material/colors'
interface BadgeProps {
    backgroundColor?: string | null,
    borderRadius?: string | null,
}
const Badge = styled('span')((props: BadgeProps) => ({
    backgroundColor: props.backgroundColor ? props.backgroundColor : red[500],
    color: 'white',
    display: 'inline-block',
    padding: '2px 10px',
    borderRadius: props.borderRadius ? props.borderRadius : '10px',
    fontSize: '0.6rem'
}))

export default Badge;
