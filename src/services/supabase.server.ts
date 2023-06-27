import { SECRET_SUPABASE_KEY } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	'https://lakmrvnfydiwycmuorqg.supabase.co',
	SECRET_SUPABASE_KEY
)
