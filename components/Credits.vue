<template>
	<div class="credits">
		<header class="header">
			<h1 class="title">
				<NuxtLink to="https://nuxt.com/" target="_blank" rel="noopener"
					>Nuxt 3</NuxtLink
				>+<NuxtLink to="https://tresjs.org/" target="_blank" rel="noopener"
					>TresJS</NuxtLink
				>
				starter
			</h1>

			<p class="subtitle">
				by
				<NuxtLink
					to="https://www.francescomichelini.com"
					target="_blank"
					rel="noopener"
					>Francesco Michelini</NuxtLink
				>
			</p>
		</header>

		<p style="opacity: 0.85">
			Check out the
			<a
				href="https://github.com/kekkorider/nuxt-tres-starter"
				target="_blank"
				rel="noopener"
				>GitHub Repository</a
			>.<br />
			<strong>TIP</strong>: Click the box to animate it.
		</p>
	</div>
</template>

<style lang="scss" scoped>
.credits {
	display: flex;
	flex-direction: column;
	background-color: #252529;
	font-size: 0.875rem;
	line-height: 1.7;
	padding: 24px;
	border-radius: 12px;
	color: rgba(255, 255, 245, 0.86);
	font-family: 'Maven Pro', sans-serif;
	position: fixed;
	left: 30px;
	bottom: 30px;
	z-index: 2;
}

.header {
	margin-bottom: 1rem;
}

.title {
	font-size: 3rem;
	font-weight: 500;
	margin: 0;
}

.subtitle {
	margin-top: -0.35em;
}

p {
	margin: 0;
}

strong {
	color: rgb(130, 219, 197);
}

a {
	color: rgb(130, 219, 197);

	&:hover {
		text-decoration: none;
	}
}
</style>
