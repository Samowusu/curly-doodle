export const useOnboardedUser = () => useState('onboardedUser', () => {
  return {
    name: '', organizations: [], id: ''
  }
})

/* USER MODEL
ID
NAME
ORGANIZATIONS : []
*/

/* ORGANIZATION MODEL
ID
NAME
MEMBERS : [USERSS]
CREATED BY: USER
*/

export const useOrganizations = () => useState('organization', () => {
  return {
    name: '', createdBy: '', members: [], id: ''
  }
})
