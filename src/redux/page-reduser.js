
let initalState = {
  page: [
    {
      "id": 1,
      "title": "sunt aut facere repellat ",
      "name": "Aram "
    },
    {
      "id": 2,
      "title": "sunt aut facere repellat ",
      "name": "Poxos "
    },
    {
      "id": 3,
      "title": "sunt aut facere repellat ",
      "name": "Jac"
    },
    {
      "id": 4,
      "title": "sunt aut facere repellat ",
      "name": "Joy"
    },
    {
      "id": 5,
      "title": "sunt aut facere repellat ",
      "name": "Jams"
    },
    {
      "id": 6,
      "title": "sunt aut facere repellat ",
      "name": "Sash"
    },
    {
      "id": 7,
      "title": "sunt aut facere repellat ",
      "name": "Smit"
    },
    {
      "id": 8,
      "title": "sunt aut facere repellat ",
      "name": "Tom"
    },
    {
      "id": 9,
      "title": "sunt aut facere repellat ",
      "name": "Smit"
    },
    {
      "id": 10,
      "title": "sunt aut facere repellat ",
      "name": "Sara"
    },
    {
      "id": 11,
      "title": "sunt aut facere repellat ",
      "name": "Kate"
    },
    {
      "id": 12,
      "title": "sunt aut facere repellat ",
      "name": "Tom"
    }

  ],
  limit: 5
}



const PageReduser = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      if (action.payload === 1) {
        action.payload = 5
        return {
          ...state,
          limit: action.payload
        }
      } else if (action.payload === 2) {
        action.payload *= 5
        return {
          ...state,
          limit: action.payload
        }
      } else if (action.payload === 3) {
        action.payload *= 5
        return {
          ...state,
          limit: action.payload
        }
      }
      return state
    default:
      return state
  }
}

export default PageReduser;

export const CHANGE_PAGE = "CHANGE_PAGE"

export const pageCountAC = (number) => {
  return {
    type: CHANGE_PAGE,
    payload: number
  }
}





