# -*- coding: utf-8 -*-

from openerp import fields, models, api


class FbConfigWebsite(models.Model):
    _inherit = 'website'

    fb_pages_id = fields.Char(
        string='Facebook pages meta',
        default='')
    fb_app_id = fields.Char(
        string='Facebook App ID',
        default='')
    fb_app_secret = fields.Char(
        string='Facebook App Secret',
        default='')


class FbConfigWebsiteSettings(models.TransientModel):
    _inherit = 'website.config.settings'

    fb_pages_id = fields.Char(
        related='website_id.fb_pages_id',
        string='Facebook pages meta')
    fb_app_id = fields.Char(
        related='website_id.fb_app_id',
        string='Facebook App ID')
    fb_app_secret = fields.Char(
        related='website_id.fb_app_secret',
        string='Facebook App Secret')


class FbConfigResUsers(models.Model):
    _inherit = 'res.users'

    fb_long_term_token = fields.Char(
        string='App Long Term Token',
        default='')
