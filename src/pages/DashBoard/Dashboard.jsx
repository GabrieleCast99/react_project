// Dashboard.jsx
import { UpdateUserForm } from '../ComponentiRest/Update/UpdateUtente';
import { GetUserByEmailForm } from '../ComponentiRest/GetByEmail/GetUserByEmailForm';
import { UserList } from '../ComponentiRest/GetAll/UserList';
import { DeleteUserForm } from '../ComponentiRest/Delete/Delete';

export function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <GetUserByEmailForm />
        { <div style={{ marginBottom: '50px' }} /> } 
            <UserList />
        { <div style={{ marginBottom: '50px' }} /> } 
            <UpdateUserForm />
        { <div style={{ marginBottom: '0px' }} /> } 
            <DeleteUserForm />
         </div>
        
    );
}
