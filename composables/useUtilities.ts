import { v4 as uuidv4 } from 'uuid'

export default () => {
  function generateRandomId () {
    return uuidv4()
  }

  function createUser (name : string) {
    return {
      id: generateRandomId(),
      name,
      organizations: []
    }
  }

  function createOrganization (name: string, createdBy:string, members:string) {
    return {
      id: generateRandomId(),
      name,
      createdBy,
      members
    }
  }
  return { generateRandomId, createUser, createOrganization }
}
