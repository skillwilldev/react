interface ProfileFormProps {
    setName: (name: string) => void;
    setRole: (role: string) => void;
    setAvatar: (avatar: string) => void;
    setIsDark: (isDark: boolean | ((prev: boolean) => boolean)) => void;
    isDark: boolean;
}

function ProfileForm({ setName, setRole, setAvatar, setIsDark, isDark }: ProfileFormProps) {
    const presetAvatars = [
        { id: 1, url: './avatars/avatar-1.avif', label: 'ავატარი 1' },
        { id: 2, url: './avatars/avatar-2.avif', label: 'ავატარი 2' },
        { id: 3, url: './avatars/avatar-3.avif', label: 'ავატარი 3' }
    ];

    return (
        <div className="form-container">
            <h2>შეაყვანეთ მონაცემები</h2>

            {/* სახელი და გვარი */}
            <div className="form-group">
                <label>სახელი და გვარი:</label>
                <input
                    type="text"
                    placeholder="ჩაწერეთ სახელი..."
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* პროფესია */}
            <div className="form-group">
                <label>პროფესია / პოზიცია:</label>
                <select onChange={(e) => setRole(e.target.value)}>
                    <option value="Front-End დეველოპერი">Front-End დეველოპერი</option>
                    <option value="Back-End დეველოპერი">Back-End დეველოპერი</option>
                    <option value="UI/UX დიზაინერი">UI/UX დიზაინერი</option>
                    <option value="პროექტ მენეჯერი">პროექტ მენეჯერი</option>
                </select>
            </div>

            {/* პროფილის სურათი (ლინკით ან მზა არჩევანით) */}
            <div className="form-group">
                <label>სურათის ლინკი (URL):</label>
                <input
                    type="text"
                    placeholder="ჩასვით სურათის URL..."
                    onChange={(e) => e.target.value && setAvatar(e.target.value)}
                />

                <div className="avatar-presets">
                    <p>ან აირჩიეთ მზა:</p>
                    {presetAvatars.map(avatar => (
                        <button
                            key={avatar.id}
                            type="button"
                            onClick={() => setAvatar(avatar.url)}
                        >
                            {avatar.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="form-group toggle-group">
                <label>მუქი რეჟიმი (Dark Mode):</label>
                <button
                    type="button"
                    className={`toggle-btn ${isDark ? 'active' : ''}`}
                    onClick={() => setIsDark((prev) => !prev)}
                >
                    {isDark ? 'ჩართულია' : 'გამორთულია'}
                </button>
            </div>
        </div>
    );
}

export default ProfileForm;