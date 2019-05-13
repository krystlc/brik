<template>
  <div class="content">
    <h5 class="title is-5">Newsletter</h5>
    <p class="subtitle is-6">
      Sign up to our newsletter and stay up to date.
    </p>
    <form name="contact" method="POST" data-netlify="true">
      <div class="field is-grouped">
        <div class="control">
          <input
            class="input"
            type="email"
            name="email"
            placeholder="Enter your e-mail"
          />
        </div>
        <div class="control">
          <button type="submit" class="button is-rounded is-info">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
