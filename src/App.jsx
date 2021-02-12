import img from './img/b.png';

const App = () => {
	return (
		<div className='main'>
			<div className='main__popup popup'>
				<div className='popup__top'>
					<div className='dropmenu'>
						<ul className='dropmenu__submenu'>
							<li className='dropmenu__item'>
								<span>1 уровень</span>
								<ul className='dropmenu__submenu'>
									<li className='dropmenu__item'>
										<span>2 уровень</span>
										<ul className='dropmenu__submenu'>
											<li className='dropmenu__item'>
												<span>3 уровень</span>
												<ul className='dropmenu__submenu'>
													<li className='dropmenu__item'>
														<span>4 уровень</span>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className='dropmenu__item'>1 уровень</li>
							<li className='dropmenu__item'>1 уровень</li>
							<li className='dropmenu__item'>1 уровень</li>
						</ul>
					</div>

					<div className='tabl'></div>
				</div>

				<div className='popup__bottom grid'>
					<ul className='grid__deck'>
						<li className='grid__item'>
							<div className='card'>
								<div className='card__img'>
									<img src={img} alt='болгарка' />
								</div>
								<div className='card__content'>
									<div className='card__title'>
										Болгарка Skil 123S LA
									</div>
									<div className='card__info'>
										Рукоятка с мягким нескользящим покрытием
										обеспечивает
									</div>
									<div className='card__buy'>
										<div className='card__price'>
											50 000р
										</div>
										<button className='card__btn'>
											купить
										</button>
									</div>
								</div>
							</div>
						</li>
						<li className='grid__item'>
							<div className='card'>
								<div className='card__img'>
									<img src={img} alt='болгарка' />
								</div>
								<div className='card__content'>
									<div className='card__title'>
										Болгарка Skil 999S LA
									</div>
									<div className='card__info'>
										Рукоятка с мягким нескользящим покрытием
										обеспечивает
									</div>
									<div className='card__buy'>
										<div className='card__price'>
											50 000р
										</div>
										<button className='card__btn'>
											купить
										</button>
									</div>
								</div>
							</div>
						</li>
						<li className='grid__item'>
							<div className='card'>
								<div className='card__img'>
									<img src={img} alt='болгарка' />
								</div>
								<div className='card__content'>
									<div className='card__title'>
										Болгарка Skil 777 LA
									</div>
									<div className='card__info'>
										Рукоятка с мягким нескользящим покрытием
										обеспечивает
									</div>
									<div className='card__buy'>
										<div className='card__price'>
											50 000р
										</div>
										<button className='card__btn'>
											купить
										</button>
									</div>
								</div>
							</div>
						</li>
						<li className='grid__item'>
							<div className='card'>
								<div className='card__img'>
									<img src={img} alt='болгарка' />
								</div>
								<div className='card__content'>
									<div className='card__title'>
										Болгарка 900S LA
									</div>
									<div className='card__info'>
										Рукоятка с мягким нескользящим покрытием
										обеспечивает
									</div>
									<div className='card__buy'>
										<div className='card__price'>
											50 000р
										</div>
										<button className='card__btn'>
											купить
										</button>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className='changename'>
				<div className='changename__overlay' method='post'>
					<form className='changename__form'>
						<span>введите новое имя</span>
						<input type='text' />
						<button type='submit'>сменить имя</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
