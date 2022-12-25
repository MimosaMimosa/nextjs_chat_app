import { blue } from '@mui/material/colors'
import { styled } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'

const SearchBox = styled('div')(
    () => `
      border:2px solid ${blue[500]};
      padding:4px 2px 4px 10px;
      border-radius:5px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex:1;
  `,
)

const InputSearch = styled('input')({
    width: '100%',
    border: 'none',
    '&:focus': {
        outline: 'none',
    },
})

const SearchBar = ({ inputRef, placeholder, onChange ,onKeyDown}: any) => {
    return (
        <SearchBox>
            <InputSearch ref={inputRef} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown}/>
            <SearchIcon sx={{ color: blue[500] }} />
        </SearchBox>
    )
}


export default SearchBar