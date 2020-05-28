//Creating a user:

export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
  })
)

//Signing in user
export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
)

//Deleting session
export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
)