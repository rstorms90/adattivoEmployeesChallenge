// Initial employees list state
const initialState = {
  employees: [
    {
      id: 0,
      firstName: 'Marcelo',
      middleInitial: '',
      lastName: 'Garcia',
      dateOfBirth: 'January 17, 1983',
      dateOfEmployment: 'February 18, 2020',
      isActive: true,
    },
    {
      id: 1,
      firstName: 'Robert',
      middleInitial: 'A',
      lastName: 'Plant',
      dateOfBirth: 'August 20, 1948',
      dateOfEmployment: 'November 17, 2019',
      isActive: false,
    },
    {
      id: 2,
      firstName: 'Anthony',
      middleInitial: 'K',
      lastName: 'Johnson',
      dateOfBirth: 'March 6, 1984',
      dateOfEmployment: 'January 16, 2020',
      isActive: true,
    },
    {
      id: 3,
      firstName: 'Dan',
      middleInitial: 'F',
      lastName: 'Abramov',
      dateOfBirth: 'August 14, 1982',
      dateOfEmployment: 'May 11, 2017',
      isActive: false,
    },
    {
      id: 4,
      firstName: 'Danny',
      middleInitial: 'E',
      lastName: 'Carey',
      dateOfBirth: 'May 10, 1961',
      dateOfEmployment: 'June 17, 2018',
      isActive: false,
    },
    {
      id: 5,
      firstName: 'Russ',
      middleInitial: 'M',
      lastName: 'Storms',
      dateOfBirth: 'October 3, 1990',
      dateOfEmployment: 'March 25, 2020',
      isActive: true,
    },
    {
      id: 6,
      firstName: 'Terry',
      middleInitial: 'A',
      lastName: 'Crews',
      dateOfBirth: 'July 30, 1968',
      dateOfEmployment: 'March 11, 2018',
      isActive: false,
    },
    {
      id: 7,
      firstName: 'Alex',
      middleInitial: '',
      lastName: 'Honnold',
      dateOfBirth: 'August 17, 1985',
      dateOfEmployment: 'November 2, 2019',
      isActive: false,
    },
    {
      id: 8,
      firstName: 'Mark',
      middleInitial: 'L',
      lastName: 'McMorris',
      dateOfBirth: 'December 9, 1993',
      dateOfEmployment: 'April 26, 2020',
      isActive: true,
    },
  ],
}

// Add & Edit Reducers to update employees state
export default function employees(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EMPLOYEE': {
      const { content } = action.payload
      return {
        ...state,
        employees: [...state.employees, content],
      }
    }
    case 'EDIT_EMPLOYEE': {
      const { content } = action.payload
      return {
        ...state,
        employees: state.employees.map(employee =>
          employee.id === content.id ? content : employee
        ),
      }
    }
    default:
      return state
  }
}

