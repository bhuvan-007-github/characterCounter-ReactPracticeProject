import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import DisplayCharactersList from '../DisplayCharactersList'

import {
  BgContainer,
  CardContainer,
  EmptyListImage,
  CharacterCounterHeading,
  CharacterCounterDescription,
  LeftCard,
  RightCard,
  ImageContainer,
  ListContainer,
  DisplayResultContainer,
  ErrorMessageDescription,
  InputStyle,
  SubmitButton,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    dataEntered: [],
    word: '',
    showErrorMsg: false,
  }

  getUserInput = event => {
    const enteredCharacters = event.target.value
    if (enteredCharacters === '') {
      this.setState({
        showErrorMsg: true,
      })
    }
    this.setState({
      word: enteredCharacters,
    })
  }

  dataIsNonEmpty = () => {
    const {word} = this.state
    const lengthOfInput = word.length
    if (word.length !== 0) {
      const newInput = {
        id: uuidv4(),
        word,
        charLength: lengthOfInput,
      }
      this.setState(prevState => ({
        dataEntered: [...prevState.dataEntered, newInput],
        word: '',
        showErrorMsg: false,
      }))
    }
  }

  addToList = event => {
    event.preventDefault()
    const {word} = this.state
    if (word === '') {
      this.setState({
        showErrorMsg: true,
      })
    } else {
      this.dataIsNonEmpty()
    }
  }

  renderList = () => {
    const {dataEntered} = this.state
    return (
      <ListContainer>
        {dataEntered.map(eachItem => (
          <DisplayCharactersList eachItem={eachItem} key={eachItem.id} />
        ))}
      </ListContainer>
    )
  }

  emptyList = () => (
    <ImageContainer>
      <EmptyListImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </ImageContainer>
  )

  render() {
    const {dataEntered, word, showErrorMsg} = this.state
    return (
      <BgContainer>
        <CardContainer>
          <LeftCard>
            <CharacterCounterDescription>
              Count the characters like a Boss...
            </CharacterCounterDescription>
            <DisplayResultContainer>
              {dataEntered.length !== 0 ? this.renderList() : this.emptyList()}
            </DisplayResultContainer>
          </LeftCard>
          <RightCard>
            <CharacterCounterHeading>Character Counter</CharacterCounterHeading>
            <form onSubmit={this.addToList}>
              <InputStyle
                onChange={this.getUserInput}
                value={word}
                type="text"
                placeholder="Enter the Characters here"
              />

              <>
                <SubmitButton type="submit">Add</SubmitButton>
              </>
              {showErrorMsg && (
                <ErrorMessageDescription>
                  *Please Enter Text
                </ErrorMessageDescription>
              )}
            </form>
          </RightCard>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default CharacterCounter
