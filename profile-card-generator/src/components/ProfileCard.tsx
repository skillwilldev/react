interface ProfileCardProps {
    name?: string;
    role: string;
    avatar: string;
    isDark: boolean;
}

function ProfileCard({ name, role, avatar, isDark }: ProfileCardProps) {
    return (
        <div className="card-container">
            <h2>ბარათის ვიზუალი (Live)</h2>
            <div className={`profile-card ${isDark ? 'dark-theme' : 'light-theme'}`}>
                <div className="avatar-wrapper">
                    <img src={avatar} alt="" className="profile-img" />
                </div>
                <h3 className="profile-name">{name || 'სახელი არ არის მითითებული'}</h3>
                <p className="profile-role">{role}</p>

                <div className="card-footer">
                    <span>ნახვა</span>
                    <span>კონტაქტი</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;