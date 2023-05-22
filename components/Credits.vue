<template>
	<div class="credits">
		Basic implementation of
		<a href="https://tresjs.org/" target="_blank" rel="noopener">TresJS</a> into
		<a href="https://nuxt.com/" target="_blank" rel="noopener">Nuxt 3</a>.<br />
		Check out the
		<a
			href="https://github.com/kekkorider/nuxt-tres-starter"
			target="_blank"
			rel="noopener"
			>GitHub Repository</a
		>
		to see how to implement it.<br /><br />
		Click the box to animate it.
	</div>
</template>

<style lang="scss" scoped>
.credits {
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	position: fixed;
	left: 30px;
	bottom: 30px;
}

a {
	color: #ed254e;
	font-weight: bold;

	&:hover {
		text-decoration: none;
	}
}
</style>
