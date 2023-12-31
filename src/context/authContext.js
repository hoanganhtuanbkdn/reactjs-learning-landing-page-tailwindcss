import { createContext, useEffect, useState } from 'react';

// buoc 1
const AuthContext = createContext();

// b2 Lay ra provider
const Provider = AuthContext.Provider;

// b3 boc Provider quanh cai component ma minh can su dung tinh nang context
const initialState = {
	email: '',
	password: '',
};
const AuthProvider = ({ children }) => {
	const [state, setState] = useState(initialState); // Khởi tạo trạng thái và hàm để cập nhật trạng thái

	useEffect(() => {
		const emailStore = window.localStorage.getItem('email');
		setState({ ...state, email: emailStore });
	}, []);

	return <Provider value={{ state, setState }}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
