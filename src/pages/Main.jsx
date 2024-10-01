import React from 'react';
import { Landing, About, Portfolio, Contact } from '../pages';
import { ThemeScroll, ContactScroll } from '../components';
import { useTheme} from "../context/themeProvider"

export const Main = () => {

	const { theme } = useTheme()

  return (
	<div className="main" data-theme={theme}>
	  <ThemeScroll />
	  <div className="content">
		<Landing />
		<About />
		<Portfolio />
		<ContactScroll />
		</div>
	</div>
  )
}