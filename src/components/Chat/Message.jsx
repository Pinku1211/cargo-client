import { useContext, useEffect, useState } from 'react';
import { getFirestore, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { AuthContext } from '../Provider/AuthProvider';
import app from '../firebase/Firebase.config';
const db = getFirestore(app)

const Message = () => {
    const { user } = useContext(AuthContext)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("timestamp"))
        const unsubscribe = onSnapshot(q, snapshot => {
            setMessages(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return unsubscribe
    }, [])

    const sendMessage = async () => {
        await addDoc(collection(db, "messages"), {
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
            text: newMessage,
            timestamp: serverTimestamp()
        })

        setNewMessage("")
    }

    return (
        <div className='flex justify-center bg-gray-800 py-10 min-h-screen' >
            <div>
                <input
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    className='p-3 rounded-l-lg bg-transparent border-2'
                    placeholder='write message'
                />
                <button className=' bg-white border-2 rounded-r-lg hover:bg-gray-200 p-3' onClick={sendMessage}>Send Message</button>
                {/* <button className='mb-8 bg-white rounded-[10px] p-3' onClick={() => auth.signOut()}>Logout</button> */}

                <div className="flex flex-col gap-5">

                    {messages.map(msg => (
                        <div key={msg.id} className={`message flex mt-4 ${msg.data.uid === user.uid ? 'justify-end' : 'justify-start  '}`}>
                            <div className={`message flex flex-row px-3 py-2 gap-3 rounded-lg items-center ${msg.data.uid === user.uid ? ' text-blue-600 bg-blue-200' : ' bg-white '}`}>
                                <img className='w-10 h-10 rounded-full' src={msg.data.photoURL} />
                                {msg.data.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Message;