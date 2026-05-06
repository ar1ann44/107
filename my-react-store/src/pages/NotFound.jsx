import { IconMoodPuzzled } from '@tabler/icons-react';

function NotFound() {
    return (
        <div className='d-flex align-items-center flex-column p-5'>
            <div>
            <IconMoodPuzzled  size={150} color='red' stroke={2}/>
            </div>
            <h1>404 - Page Not Found</h1>
            <p>Ooops! The page you are looking for does not exist</p>
        </div>
    )
}

export default NotFound;