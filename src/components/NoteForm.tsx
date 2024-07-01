import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react' // replace with your actual imports
import { useMemo, useRef } from 'react'
import { Form, Link, useSubmit } from 'react-router-dom' // assuming you're using react-router-dom
import ReactSelectCreatable from 'react-select/creatable'
import { v4 as uuidV4 } from 'uuid'
import { useLocalStorage } from '../customHook/useLocalStorage'

const NoteForm = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const tagsRef = useRef(null)
  const submit = useSubmit()

  const [notes, setNotes] = useLocalStorage('NOTES', [])
  const [tags, setTags] = useLocalStorage('TAGS', [])
  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      }
    })
  }, [notes, tags])
  function onCreateNote({ tags, ...data }) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    // Manually add the React Select Creatable value
    const tags = tagsRef.current.getValue()
    formData.append('tags', JSON.stringify(tags))
    for (const value of formData.values()) {
      console.log(value)
    }
    onCreateNote({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    })
    // submit(formData, { method: 'post' })
  }

  return (
    <Form method='post' onSubmit={handleSubmit}>
      <Stack spacing={5}>
        <Flex gap={5}>
          <FormControl id='title'>
            <FormLabel>Title</FormLabel>
            <Input name='title' ref={titleRef} type='email' required />
            <FormErrorMessage>Error Message</FormErrorMessage>
          </FormControl>
          <FormControl id='tags'>
            <FormLabel>Tags</FormLabel>
            <ReactSelectCreatable isMulti ref={tagsRef} />
          </FormControl>
        </Flex>
        <FormControl id='markdown'>
          <FormLabel>Body</FormLabel>
          <Textarea
            name='markdown'
            ref={markdownRef}
            rows={15}
            width={'100%'}
            placeholder='Here is a sample placeholder'
            resize={'vertical'}
          />
        </FormControl>
        <Stack direction={'row'} justifyContent={'end'}>
          <Button type='submit' colorScheme='blue'>
            Save
          </Button>
          <Link to='..'>
            <Button variant={'outline'} colorScheme='blue'>
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  )
}

export default NoteForm
