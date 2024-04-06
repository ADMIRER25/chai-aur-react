import React from 'react'

const UserContext = React.createContext()

export default UserContext;


{/* <UserContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
</UserContext> */}
// Whenever we wrap the part using UserContext this part is a provider and now it can access the global data or we can say UserContext or we can say  LIke Data can Access every state through UserContext
