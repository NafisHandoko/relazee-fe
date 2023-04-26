import { Route, Routes } from 'react-router-dom'
import UserHome from './pages/user/home'
import UserKompetisiDetail, { UserKompetisiDetailDeskripsi, UserKompetisiDetailInfo } from './pages/user/kompetisi-detail'
import UserPartner from './pages/user/partner'
import UserKompetisi from './pages/user/kompetisi'
import UserMore from './pages/user/more'
import UserPartnerDetail from './pages/user/partner-detail'

function App() {
    return (
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/more" element={<UserMore />}>
                <Route path='partner' element={<UserPartner />} />
                <Route path='kompetisi' element={<UserKompetisi />} />
            </Route>
            <Route path="/kompetisi/:id" element={<UserKompetisiDetail />}>
                <Route path="info" element={<UserKompetisiDetailInfo />} />
                <Route path="deskripsi" element={<UserKompetisiDetailDeskripsi />} />
            </Route>
            <Route path='/partner/:id' element={<UserPartnerDetail />} />
        </Routes>
    )
}

export default App
