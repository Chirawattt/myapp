// React how to use props
/* 
 - [first way] using props by define one prop and use . in the prop name to access the prop value
const prop = (props) => {
    return (
        <section>
            <h1>how to use props components</h1>
            <img src={props.img} alt={props.alt} />
            <h2>First Name: {props.firstName}</h2>
            <h2>Last Name: {props.lastName}</h2>
            <h2>Nick Name: {props.nickName}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Is Student: {props.isStudent ? 'Yes' : 'No'}</h2>
            <h2>Hobbies:</h2>
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </section>
    );
}
*/

// [second way] using props by define multiple props and use {} to access the prop value
// children is a special prop that is used to display the content between the opening and closing tags of the component 
// only define 'children' name in the component if want to use it
const prop = ({img, alt, firstName, lastName, nickName, age, isStudent, hobbies, children}) => {
    return (
        <section>
            <h1>how to use props components</h1>
            <img src={img} alt={alt} />
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
            <h2>Nick Name: {nickName}</h2>
            <h2>Age: {age}</h2>
            <h2>Is Student: {isStudent ? 'Yes' : 'No'}</h2>
            <h2>Hobbies:</h2>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
            {children}
        </section>
    );
}

export default prop;