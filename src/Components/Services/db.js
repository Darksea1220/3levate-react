import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js'
import { getFirestore, collection } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyBA3j4aCPf1Be_CQgMzJda0o86k_f-hdOM',
  authDomain: 'prueba1-c6b16.firebaseapp.com',
  projectId: 'prueba1-c6b16',
  storageBucket: 'prueba1-c6b16.appspot.com',
  messagingSenderId: '940799990467',
  appId: '1:940799990467:web:23879c70140cf9b700e076',
  measurementId: 'G-B74ME082SM'
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const usersRef = collection(db, 'usuarios')
const Projects = collection(db, 'Projects')

export const queryUser = async ({
  email,
  password
}) => {
  try {
    const q = usersRef.where('email', '==', email).where('password', '==', password)
    const querySnapshot = await q.get()
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data())
    })
    console.log('aquí llegué')
    return !querySnapshot.empty
  } catch (error) {
    console.log('en el error')
    return false
  }
}

export const listenPost = (cb) => {
  try {
    Projects.onSnapshot((documentos) => {
      const post = documentos.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }))
      cb(post)
    })
  } catch (error) {}
}

export const getPost = async () => {
  try {
    const post = []
    const q = Projects
    const querySnapshot = await q.get()
    querySnapshot.forEach((doc) => {
      post.push({
        id: doc.id,
        data: doc.data()
      })
    })
    return post
  } catch (error) {}
}
