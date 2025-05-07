import {EnteredWord, WordLength} from './styledComponents'

const DisplayCharactersList = props => {
  const {eachItem} = props
  const {word, charLength} = eachItem
  return (
    <li>
      <EnteredWord>
        {word}: <WordLength>{charLength}</WordLength>
      </EnteredWord>
    </li>
  )
}

export default DisplayCharactersList
