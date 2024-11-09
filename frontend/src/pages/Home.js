import Register from '../components/Register';

export default function Home() {
    return (
        <div className='Title'>
            <h2>Ianverse</h2>
            <p>Here is a page to better my react skill and learn to create a messaging app!</p>
            <p>For now this will start as a messaging app! Once that is functional and works well, I will add posting/commenting/liking features so that people can interact publically!</p>
            <p>The end goal is to slowly create a full social media platform that I can convert into a Mobile app. This will help me build skills with AWS for hosting, PostgreSQL for relational databases
                React/JavaScript for Frontend/Web dev, React native (most likely) for when its mobile, and Django for the backend. This will also allow me to get into a lot of other areas like containerization, devops, 
                and more to make me a lot more well rounded of a developer.
            </p>
            <Register />
        </div>
    )
}