<template>
  <div class="content">
    <h5 class="title is-5">Newsletter</h5>
    <p class="subtitle is-6">
      Sign up to our newsletter and stay up to date.
    </p>
    <form
      name="contact"
      action="/subscribed"
      method="post"
      netlify-honeypot="bot-field"
      netlify
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="is-hidden">
        <label>Don’t fill this out: <input name="bot-field"/></label>
      </p>
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
          <button type="submit" class="button is-outlined is-info">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
